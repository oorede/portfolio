const CopyRight = () => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="logo">
              <img src="img/logo/logo_.png" alt="" />
            </div>
            <div className="copy">
              <p>
                © {new Date().getFullYear()} by{" "}
                <a href="#" target="_blank">
                  Oussama.HM.
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
