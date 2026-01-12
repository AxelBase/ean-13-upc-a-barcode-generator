<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';

  const paypalUsername = 'AxelLab427'; // UPDATE THIS LATER if needed
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

  const currentYear = new Date().getFullYear();
</script>

<svelte:head>
  <title>AxelBase – EAN-13 / UPC-A Barcode Generator</title>
  <meta name="description" content="Free, instant, standards-compliant EAN-13 and UPC-A barcode generator. No ads, no tracking, works offline." />
</svelte:head>

<header class="custom-navbar">
  <div class="container d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" aria-label="Home" class="d-flex align-items-center text-decoration-none gap-2">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
        <span class="navbar-brand-text">AxelBase</span>
      </a>

      <!-- Buy Me a Coffee + Bitcoin Dropdown -->
      <div class="bmac-nav-item ms-3 d-none d-md-block position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span>Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown">
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount bitcoin-option"
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
    <span>© {currentYear} AxelBase — EAN-13/UPC-A Barcode Generator</span>
    <div>
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <span class="text-white-50">|</span>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* Keeping File 2 root variables + adding needed styles from File 1 */

  .bmac-button {
    background: var(--primary-color);
    color: white;
    font-weight: 700;
    padding: 0.6rem 1.3rem;
    border-radius: var(--radius-pill);
    border: none;
    box-shadow: 0 4px 15px rgba(30, 89, 69, 0.25);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-size: 0.95rem;
  }

  .bmac-button:hover {
    background: var(--primary-hover);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(30, 89, 69, 0.35);
  }

  .bmac-dropdown {
    position: absolute;
    top: 130%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(30, 89, 69, 0.18);
    overflow: hidden;
    border: 1px solid rgba(30, 89, 69, 0.12);
    z-index: 1001;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.97rem;
    transition: all 0.2s ease;
    border-bottom: 1px solid #f0f0f0;
  }

  .bmac-dropdown a:last-child {
    border-bottom: none;
  }

  .bmac-dropdown a:hover {
    background: var(--light-bg);
    color: var(--primary-color);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: var(--primary-color);
    font-size: 1.15rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 700;
    color: var(--primary-color);
    justify-content: center !important;
    border-top: 1px solid #eee;
    padding: 14px 20px;
  }

  .bitcoin-option {
    color: #f7931a !important;
    font-weight: 700;
  }

  .bitcoin-option:hover {
    background: #fff9f0 !important;
    color: #e67e22 !important;
  }
</style>