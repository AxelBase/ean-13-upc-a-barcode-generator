<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click outside directive
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<svelte:head>
  <title>AxelBase – EAN-13 / UPC-A Barcode Generator</title>
  <meta
    name="description"
    content="Free, instant, standards-compliant EAN-13 and UPC-A barcode generator. No ads, no tracking, works offline."
  />
</svelte:head>

<header class="custom-navbar">
  <div class="container d-flex justify-content-between align-items-center">

    <div class="d-flex align-items-center gap-3">
      <a
        href="{base}/"
        aria-label="Home"
        class="d-flex align-items-center text-decoration-none gap-2"
      >
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
        <span class="navbar-brand-text">AxelBase</span>
      </a>

      <!-- Buy Me A Coffee -->
      <div
        class="bmac-nav-item ms-3 d-none d-md-block"
        use:clickOutside
        on:click_outside={closeDropdown}
      >
        <button
          class="bmac-button"
          on:click={toggleDropdown}
          aria-label="Support AxelBase"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4,0,0,0,8,17H14A4,4,0,0,0,18,13V10H20A2,2,0,0,0,22,8V5C22,3.89 21.1,3 20,3Z" />
          </svg>
          Buy me a coffee
        </button>

        {#if isDropdownOpen}
          <div
            class="bmac-dropdown"
            transition:fly={{ y: -8, duration: 200 }}
          >
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              class="custom-amount"
              on:click={closeDropdown}
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              class="custom-amount"
              on:click={closeDropdown}
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <nav>
      <ul class="d-flex align-items-center gap-2 m-0 p-0" style="list-style: none;">
        <li><a class="nav-link" href="{base}/">Home</a></li>
        <li><a class="nav-link" href="{base}/#about">About</a></li>
        <li><a class="nav-link" href="{base}/#how-to">How to use</a></li>
        <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
        <li><a class="nav-link" href="{base}/blog">Blog</a></li>
      </ul>
    </nav>
  </div>
</header>

<main class="container py-5">
  <slot />
</main>

<footer class="custom-footer">
  <div class="container d-flex justify-content-between align-items-center">
    <span>© {new Date().getFullYear()} AxelBase — EAN-13/UPC-A Barcode Generator</span>
    <div>
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <span class="text-white-50">|</span>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* Dropdown enhancements to match File 2 theme */
  .bmac-dropdown {
    min-width: 240px;
  }

  .bmac-dropdown a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: var(--primary-color);
    font-size: 1.05rem;
  }

  .bmac-dropdown .custom-amount {
    justify-content: center;
    font-weight: 700;
    color: var(--primary-color);
    border-top: 1px solid #eee;
  }
</style>
