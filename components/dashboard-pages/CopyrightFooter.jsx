const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Africa-Connect par{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          signature
        </a>
        . Tout droit réservé.
      </p>
    </div>
  );
};

export default CopyrightFooter;
