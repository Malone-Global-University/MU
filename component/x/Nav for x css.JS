nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  transition: background-color var(--transition-speed) ease;
}

nav .logo { font-size: 1.6rem; font-weight: 700; }
nav ul { display: flex; gap: 1.5rem; list-style: none; }
nav ul li a { font-weight: 500; }
#theme-toggle-btn {
  cursor: pointer;
  border: none;
  background: none;
  font-size: 1.2rem;
}
