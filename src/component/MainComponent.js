import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";

import { Widget } from "./Widget";
import { SuccessMessage } from "./SuccessMessage";

const MainComponent = () => {
  //popover
  const [popoverOpenCardholder, setPopoverOpenCardholder] = useState(false);
  const [popoverOpenCvv, setPopoverOpenCvv] = useState(false);
  const [popoverOpenChecked, setPopoverOpenChecked] = useState(false);

  const toggleCardholder = () =>
    setPopoverOpenCardholder(!popoverOpenCardholder);
  const toggleCvv = () => setPopoverOpenCvv(!popoverOpenCvv);
  const toggleChecked = () => setPopoverOpenChecked(!popoverOpenChecked);

  //validation,submition
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    setModal(!modal);
  };
  //modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <SuccessMessage toggle={toggle} modal={modal} setModal={setModal} />
      <Widget
        // popovers
        popoverOpenCardholder={popoverOpenCardholder}
        toggleCardholder={toggleCardholder}
        popoverOpenCvv={popoverOpenCvv}
        toggleCvv={toggleCvv}
        popoverOpenChecked={popoverOpenChecked}
        toggleChecked={toggleChecked}
        // form validation, submition
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </Fragment>
  );
};
export default MainComponent;
