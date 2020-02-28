import React from "react";
import { Popover, PopoverBody } from "reactstrap";

import { ReactComponent as KastaLogo } from "../icons/kasta-logo.svg";
import { ReactComponent as DssLogo } from "../icons/dss-logo.svg";
import { ReactComponent as MasterCardLogo } from "../icons/mastercard-secure.svg";
import { ReactComponent as VisaLogo } from "../icons/visa-secure.svg";
import { ReactComponent as KastaPayLogo } from "../icons/kastapay.svg";
import { ReactComponent as CreditCardLogo } from "../icons/credit-card.svg";
import { ReactComponent as QuestinMarkLogo } from "../icons/question-mark.svg";

export const Widget = ({
  popoverOpenCardholder,
  toggleCardholder,
  popoverOpenCvv,
  toggleCvv,
  toggleChecked,
  popoverOpenChecked,
  onSubmit,
  register,
  errors
}) => (
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
              <form className="card-form" onSubmit={onSubmit}>
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
                    <div className="card__col-left ">
                      <label
                        htmlFor="cardpay-cardnumber"
                        className="label-main control-label"
                      >
                        Номер картки
                      </label>
                      <div className="none">
                        <input
                          ref={register({
                            required: true,
                            minLength: 16,
                            maxLength: 16,
                            pattern: /^[0-9]*$/
                          })}
                          maxLength="16"
                          type="text"
                          name="cardnumber"
                          id="cardpay-cardnumber"
                          className="card__input form-control field-card-number cc-number"
                          placeholder="XXXX XXXX XXXX XXXX"
                        />
                        {errors.cardnumber && (
                          <p className="form-errmesage">Невірна картка</p>
                        )}
                        <i className="card__type"></i>
                      </div>
                    </div>
                    <div className="card__col-right ">
                      <label
                        htmlFor="cardpay-validity"
                        className="label-main control-label"
                      >
                        Термін дії
                      </label>
                      <input
                        name="cardExpire"
                        type="text"
                        className="card__input form-control "
                        placeholder="ММ / РР"
                        maxLength="5"
                        ref={register({
                          required: true,
                          minLength: 4,
                          maxLength: 5,
                          pattern: /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/
                        })}
                      />
                      {errors.cardExpire && (
                        <p className="form-errmesage-expaired">
                          Невірний термін
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="card__row">
                    <div className="card__col-left form-group">
                      <div className="popover-wrap">
                        {" "}
                        <label
                          htmlFor="cardpay-cardholder"
                          className="label-main control-label"
                        >
                          Власник карти
                        </label>
                        <div className="cardholder-popover">
                          {" "}
                          <QuestinMarkLogo
                            id="Popover1"
                            // type="button"
                            className="popover-svg"
                          />{" "}
                          <Popover
                            placement="top"
                            isOpen={popoverOpenCardholder}
                            target="Popover1"
                            toggle={toggleCardholder}
                          >
                            <PopoverBody>
                              Фамілія і ім´я людини на яке випущена картка. Для
                              іменних карток — нанесено на карткy
                            </PopoverBody>
                          </Popover>
                        </div>
                      </div>

                      <input
                        name="cardholderName"
                        ref={register({
                          required: true,
                          minLength: 6,
                          maxLength: 30,
                          pattern: /^[a-zа-яё\sыа-щА-ЩЬьЮюЯяЇїІіЄєҐґ']+$/iu
                        })}
                        maxLength="30"
                        id="cardpay-cardholder"
                        className="card__input form-control text-uppercase"
                        placeholder="CARDHOLDER NAME"
                      />
                      {errors.cardholderName && (
                        <p className="form-errmesage">
                          Введіть ПІБ власника картки
                        </p>
                      )}
                    </div>
                    <div className="card__col-right form-group">
                      <div className="popover-wrap">
                        {" "}
                        <label
                          htmlFor="cardpay-cardsecure"
                          className="label-main control-label"
                        >
                          <span>CVV</span>
                        </label>
                        <div className="cvv-popover">
                          {" "}
                          <QuestinMarkLogo
                            id="Popover2"
                            // type="button"
                            className="popover-svg"
                          />{" "}
                          <Popover
                            placement="top"
                            isOpen={popoverOpenCvv}
                            target="Popover2"
                            toggle={toggleCvv}
                          >
                            <PopoverBody>
                              Останні 3 цифри на зворотній стороні картки
                            </PopoverBody>
                          </Popover>
                        </div>
                      </div>

                      <input
                        ref={register({
                          required: true,
                          minLength: 3,
                          maxLength: 3,
                          pattern: /^[0-9]*$/
                        })}
                        maxLength="3"
                        name="cardcvv"
                        id="cardpay-cardsecure"
                        className="card__input form-control field-cvv"
                        placeholder="XXX"
                      />
                    </div>
                  </div>
                </div>
                {/* ------------ Card input data end----------- */}

                {/* ---------Сard foot part---------- */}
                <div className="card__foot">
                  <div className="row form-group card__remember remember">
                    <div className="col-xs-12 popover-wrap">
                      <label className="label-normal remember__wrap">
                        <input type="checkbox" autoComplete="on" />
                        <span className="remember_checked">
                          Запам'ятати цю картку
                        </span>
                      </label>
                    </div>

                    <div className="cardholder-checked">
                      {" "}
                      <QuestinMarkLogo
                        id="Popover3"
                        // type="button"
                        className="popover-svg"
                      />{" "}
                      <Popover
                        placement="top"
                        isOpen={popoverOpenChecked}
                        target="Popover3"
                        toggle={toggleChecked}
                      >
                        <PopoverBody>
                          Наступного разу можна буде вибрати збережену карту i
                          оплатити вводячи тільки CVV
                        </PopoverBody>
                      </Popover>
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
              </form>
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
