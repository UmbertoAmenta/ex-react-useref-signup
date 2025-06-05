import { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearOfExp, setYearsOfExp] = useState(0);
  const [description, setDescription] = useState("");

  function subForm(e) {
    e.preventDefault();

    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization ||
      !description.trim() ||
      isNaN(yearOfExp) ||
      Number(yearOfExp) <= 0
    ) {
      alert("Compila tutti i campi correttamente!");
      return;
    }

    console.log({
      name: fullName,
      username: username,
      password: password,
      specializzazione: specialization,
      anniDiEsperienza: yearOfExp,
      descrizione: description,
    });
  }

  return (
    <>
      <form onSubmit={subForm}>
        <h4>Compila il form di registrazione, tutti i dati sono obbligatori</h4>

        <div>
          <label htmlFor="name">Nome Cognome</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            id="name"
            placeholder="..."
            required
          />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            placeholder="..."
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="***"
            required
          />
        </div>

        <div>
          <label htmlFor="specialization">Specializzazione</label>
          <select
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            required
          >
            <option hidden></option>
            <option value="Fullstack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>

        <div>
          <label htmlFor="yearsOfExp">Anni di esperienza</label>
          <input
            value={yearOfExp}
            onChange={(e) => setYearsOfExp(e.target.value)}
            type="number"
            min="0"
            id="yearsOfExp"
            required
          />
        </div>

        <div>
          <label htmlFor="description">Descrivi te stesso</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name=""
            id=""
            placeholder="..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit">Invia</button>
      </form>
    </>
  );
}
