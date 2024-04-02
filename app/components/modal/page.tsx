import React, { useState } from "react";
import style from "./page.module.css"

const SimulationModal = () => {
  const [modal, setModal] = useState("");
  const [cpf, setCpf] = useState("");
  const [bornDate, setBornDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [amountRequested, setAmountRequested] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [corrective, setCorrective] = useState("");
  const [index, setIndex] = useState("");
  const [amortization, setAmortization] = useState("");
  const [paymentPeriod, setPaymentPeriod] = useState("");
  const [gracePeriod, setGracePeriod] = useState("");

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    const formData = {
      modal,
      cpf,
      bornDate,
      fullName,
      email,
      state,
      amountRequested,
      propertyPrice,
      corrective,
      index,
      amortization,
      paymentPeriod,
      gracePeriod
    };
    try {
      const response = await fetch("http://localhost:3000/website/proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Handle success response
      console.log("Data posted successfully");
    } catch (error) {
      // Handle error
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className={style.overlay}>
    <form className={style.forms} onSubmit={handleSubmit}>

    <div>
        <input
          type="radio"
          id="pf"
          name="modal"
          value="Pessoa Física"
          checked={modal === "Pessoa Física"}
          onChange={(e) => setModal(e.target.value)}
        />
        <label htmlFor="pf">Pessoa Física</label>
      </div>
      <div>
        <input
          type="radio"
          id="pj"
          name="modal"
          value="Pessoa Jurídica"
          checked={modal === "Pessoa Jurídica"}
          onChange={(e) => setModal(e.target.value)}
        />
        <label htmlFor="pj">Pessoa Jurídica</label>
      </div>
     
     
      <input type="text" name="cpf" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      <input type="text" name="bornDate" placeholder="Born Date" value={bornDate} onChange={(e) => setBornDate(e.target.value)} />
      <input type="text" name="fullName" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" name="state" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
      <input type="number" name="amountRequested" placeholder="Amount Requested" value={amountRequested} onChange={(e) => setAmountRequested(e.target.value)} />
      <input type="number" name="propertyPrice" placeholder="Property Price" value={propertyPrice} onChange={(e) => setPropertyPrice(e.target.value)} />
      <input type="text" name="corrective" placeholder="Corrective" value={corrective} onChange={(e) => setCorrective(e.target.value)} />
      <input type="text" name="index" placeholder="Index" value={index} onChange={(e) => setIndex(e.target.value)} />
      <input type="text" name="amortization" placeholder="Amortization" value={amortization} onChange={(e) => setAmortization(e.target.value)} />
      <input type="number" name="paymentPeriod" placeholder="Payment Period" value={paymentPeriod} onChange={(e) => setPaymentPeriod(e.target.value)} />
      <input type="number" name="gracePeriod" placeholder="Grace Period" value={gracePeriod} onChange={(e) => setGracePeriod(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default SimulationModal;
