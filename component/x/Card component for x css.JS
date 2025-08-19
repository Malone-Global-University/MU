.card {
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.card h3 { margin-bottom: 0.5rem; }
.card p { font-size: 0.95rem; }
.card a { font-weight: 600; color: var(--primary-color); }
