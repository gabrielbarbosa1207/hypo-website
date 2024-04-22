"use client"
import React, { useState } from "react";
import style from "./page.module.css"

const SimulationModal = () => {
  const [model, setModel] = useState("");
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
      model,
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
      const response = await fetch("http://localhost:80/api/website/proposal", {
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
    <button>
      X
    </button>
    <div>
        <input
          type="radio"
          id="pf"
          name="modal"
          value="Pessoa Física"
          checked={model === "Pessoa Física"}
          onChange={(e) => setModel(e.target.value)}
        />
        <label htmlFor="pf">Pessoa Física</label>
      </div>
      <div>
        <input
          type="radio"
          id="pj"
          name="modal"
          value="Pessoa Jurídica"
          checked={model === "Pessoa Jurídica"}
          onChange={(e) => setModel(e.target.value)}
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

      <div>
        <input
          type="radio"
          id="post"
          name="corrective"
          value="Pós-fixado"
          checked={corrective === "Pós-fixado"}
          onChange={(e) => setCorrective(e.target.value)}
        />
        <label htmlFor="post">Pós-fixado</label>
      </div>

      <div>
        <input
          type="radio"
          id="pre"
          name="corrective"
          value="Prefixado"
          checked={corrective === "Prefixado"}
          onChange={(e) => setCorrective(e.target.value)}
        />
        <label htmlFor="pre">Prefixado</label>
      </div>


      {/* *******************************index***************************  */}


      <div>
        <input
          type="radio"
          id="cdi"
          name="index"
          value="CDI"
          checked={index === "CDI"}
          onChange={(e) => setIndex(e.target.value)}
        />
        <label htmlFor="cdi">CDI</label>
      </div>

      <div>
        <input
          type="radio"
          id="ipca"
          name="index"
          value="IPCA"
          checked={index === "IPCA"}
          onChange={(e) => setIndex(e.target.value)}
        />
        <label htmlFor="ipca">IPCA</label>
      </div>

      {/* *******************************index***************************  */}

      <div>
        <input
          type="radio"
          id="sac"
          name="amortization"
          value="SAC"
          checked={amortization === "SAC"}
          onChange={(e) => setAmortization(e.target.value)}
        />
        <label htmlFor="cdi">SAC</label>
      </div>

      <div>
        <input
          type="radio"
          id="price"
          name="amortization"
          value="Preço"
          checked={amortization === "Preço"}
          onChange={(e) => setAmortization(e.target.value)}
        />
        <label htmlFor="price">Preço</label>
      </div>

      
      <input type="number" name="paymentPeriod" placeholder="Payment Period" value={paymentPeriod} onChange={(e) => setPaymentPeriod(e.target.value)} />
      <input type="number" name="gracePeriod" placeholder="Grace Period" value={gracePeriod} onChange={(e) => setGracePeriod(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default SimulationModal;
