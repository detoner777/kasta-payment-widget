import React from "react";
import { ReactComponent as KastaLogo } from "../icons/kasta-logo.svg";
import { ReactComponent as DssLogo } from "../icons/dss-logo.svg";
import { ReactComponent as MasterCardLogo } from "../icons/mastercard-secure.svg";
import { ReactComponent as VisaLogo } from "../icons/visa-secure.svg";
import { ReactComponent as KastaPayLogo } from "../icons/kastapay.svg";
import { ReactComponent as CreditCardLogo } from "../icons/credit-card.svg";
import { ReactComponent as questinMarkLogo } from "../icons/question-mark.svg";

function PaymentWidget() {
  return (
    <div className="widget-wrapper">
      <div className="widget__padding">
        {/* --------Widget header --------- */}
        <div className="header">
          {" "}
          <KastaLogo className="logo-kasta" />
          <span className="header__total total">
            <span className="total__label small">До оплати</span>
            <br />
            <span className="total__price">
              <span>123 284</span>&nbsp;UAH
            </span>
          </span>
        </div>

        {/* --------Widget header end --------- */}
        {/* ----------Card Content------------ */}
        <div className="container">
          <div className="cards">
            <div className="card">
              <div className="card__body">
                <div className="card__header">
                  <div className="card__header_left">
                    <div className="card_new_card">
                      <div className="card__round"></div>
                      <p>Нова картка</p>
                    </div>

                    <p>Visa, Mastercard</p>
                  </div>

                  <CreditCardLogo className="card_data_header_logo" />
                </div>
                {/* ------------ Card input data----------- */}

                <div className="card__data">
                  <div className="card__row">
                    <div className="card__col-left validation-wrapper card__cardnumber has-error">
                      <label
                        htmlFor="cardpay-cardnumber"
                        className="label-main control-label"
                      >
                        Номер картки
                      </label>

                      <div className="none">
                        <input
                          id="cardpay-cardnumber"
                          className="card__input form-control field-card-number cc-number"
                          value=""
                          placeholder="XXXX XXXX XXXX XXXX"
                          required=""
                        />
                        <i className="card__type"></i>
                      </div>
                    </div>
                    <div className="card__col-right validation-wrapper ">
                      <label
                        htmlFor="cardpay-validity"
                        className="label-main control-label"
                      >
                        Термін дії
                      </label>

                      <input
                        id="cardpay-validity"
                        className="card__input form-control "
                        name="card[cardValidity]"
                        placeholder="ММ / РР"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="card__row">
                    <div className="card__col-left form-group validation-wrapper ">
                      <label
                        htmlFor="cardpay-cardholder"
                        className="label-main control-label"
                      >
                        Власник карти
                      </label>

                      <input
                        id="cardpay-cardholder"
                        type="text"
                        className="card__input form-control text-uppercase"
                        value=""
                        placeholder="CARDHOLDER NAME"
                        required=""
                      />
                    </div>
                    <div className="card__col-right form-group validation-wrapper ">
                      <label
                        htmlFor="cardpay-cardsecure"
                        className="label-main control-label"
                      >
                        <span>CVV</span>
                      </label>

                      <input
                        id="cardpay-cardsecure"
                        type="tel"
                        pattern="[0-9]{3}"
                        inputMode="numeric"
                        className="card__input form-control field-cvv"
                        value=""
                        placeholder="XXX"
                      />
                    </div>
                  </div>
                </div>
                {/* ------------ Card input data end----------- */}

                {/* ---------Сard foot part---------- */}
                <div className="card__foot">
                  <div className="row form-group card__remember remember">
                    <div className="col-xs-12 text-center remember__wrap">
                      <label className="label-normal remember__label">
                        <input type="checkbox" autoComplete="on" />
                        <span className="remember_checked">
                          Запам'ятати цю картку
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn-pay btn-block btn-lg">
                      Оплатити <span>123 284</span>&nbsp;UAH{" "}
                    </button>
                    <p className="end_timer text-center">
                      <span>Час до завершення платежу </span>
                      <span>00:11:29</span>
                    </p>
                  </div>
                </div>

                {/* ---------Сard foot part ends---------- */}
              </div>
            </div>
          </div>
        </div>

        {/* ----------Card Content end------------ */}
        {/* ------------Footer----------- */}
        <div className="footer">
          <div className="logoline">
            <DssLogo className="logoline__item logo_footer_dss" />
            <MasterCardLogo className="logoline__item  logo_footer_mastercard" />
            <VisaLogo className="logoline__item logo_footer_visa-secure" />
          </div>
          <div className="footer__wrap">
            <div className="footer__logo">
              <a className="footer__logo-a" href="https://kasta.ua">
                <KastaPayLogo />
              </a>
            </div>
          </div>
        </div>
        {/* ------------Footer end----------- */}
      </div>
    </div>
  );
}
export default PaymentWidget;
