import { Col, Row } from 'antd';
import React from 'react';
import styles from './CommonSportsBook.module.css';

function CommonSportsBook() {
  return (
    <div className={styles.sidebarBlock}>
      <div className={styles.sidebarBlockTitle}>
        <img
          src={'/images/comom-sport.svg'}
          height="32px"
          width="32px"
          style={{ paddingRight: '6px' }}
        />
        <span>Common Sportsbooks</span>
      </div>
      <div className={styles.sidebarBlockContent}>
        <Row>
          <Col span={12} className={styles.company_logo}>
            <a href="https://sportsbook.fanduel.com/">
              <img
                src="/images/fanduel.png"
                alt="Fanduel Logo"
                width={107}
                height={26}
                className={styles.image_style}
              />
            </a>
          </Col>
          <Col span={12} className={styles.company_logo}>
            <a href="https://sportsbook.draftkings.com">
              <img
                src="/images/draftkings.png"
                alt="Draftkings SportsBook Logo"
                width={109}
                height={29}
                className={styles.image_style}
              />
            </a>
          </Col>
          <Col span={12} className={styles.company_logo}>
            <a href="https://betway.com/">
              <img
                src="/images/betway.png"
                alt="Betway Logo"
                width={98}
                height={32}
                className={styles.image_style}
              />
            </a>
          </Col>
          <Col span={12} className={styles.company_logo}>
            <a href="https://www.williamhill.com/us">
              <img
                src="/images/williamhill.png"
                alt="WilliamHill SportsBook Logo"
                width={120}
                height={34}
                className={styles.image_style}
              />
            </a>
          </Col>
          <Col span={12} className={styles.company_logo}>
            <a href="https://www.bet365.com/#/HO/">
              <img
                src="/images/bet365.png"
                alt="Bet365 Logo"
                width={94}
                height={31}
                className={styles.image_style}
              />
            </a>
          </Col>
          <Col span={12} className={styles.company_logo}>
            <a href="https://www.williamhill.com/us">
              <img
                src="/images/888sport.png"
                alt="888Sports Logo"
                width={120}
                height={34}
                className={styles.image_style}
              />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CommonSportsBook;