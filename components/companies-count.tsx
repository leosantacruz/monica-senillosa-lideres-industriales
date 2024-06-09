import type { NextPage } from "next";
import styles from "./companies-count.module.css";

export type CompaniesCountType = {
  className?: string;
};

const CompaniesCount: NextPage<CompaniesCountType> = ({ className = "" }) => {
  return (
    <div className={[styles.companiesCount, className].join(" ")}>
      <div className={styles.companiesNumber}>
        <div className={styles.k}>
          <span>99</span>
          <span className={styles.k1}>k</span>
        </div>
      </div>
      <b className={styles.empresasCertificadas}>
        <p className={styles.empresas}>{`EMPRESAS `}</p>
        <p className={styles.certificadas}>CERTIFICADAS</p>
      </b>
    </div>
  );
};

export default CompaniesCount;
