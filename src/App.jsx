import { useMemo, useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearOfExp, setYearsOfExp] = useState(0);
  const [description, setDescription] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  const isUsernameValid = useMemo(() => {
    const characters = username
      .split("")
      .every((c) => letters.includes(c.toLowerCase()) || numbers.includes(c));
    return characters && username.trim().length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    const areLetters = password
      .split("")
      .some((l) => letters.includes(l.toLowerCase()));
    const areNumbers = password.split("").some((n) => numbers.includes(n));
    const areSymbols = password.split("").some((s) => symbols.includes(s));
    return password.length >= 8 && areLetters && areNumbers && areSymbols;
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000;
  }, [description]);

  function subForm(e) {
    e.preventDefault();

    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization ||
      !description.trim() ||
      isNaN(yearOfExp) ||
      Number(yearOfExp) <= 0 ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("Compila tutti i campi correttamente!");
      return;
    }

    console.log("Utente registrato:", {
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
          {username.length > 0 && (
            <span style={{ color: isUsernameValid ? "green" : "red" }}>
              {isUsernameValid
                ? "Username valido"
                : "Minimo 6 caratteri. Solo lettere e numeri."}
            </span>
          )}
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
          {password.length > 0 && (
            <span style={{ color: isPasswordValid ? "green" : "red" }}>
              {isPasswordValid
                ? "Password valida"
                : "Minimo 8 caratteri. Almeno: 1 lettera, 1 numero, 1 simbolo"}
            </span>
          )}
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
          />
          {description.length > 0 && (
            <span style={{ color: isDescriptionValid ? "green" : "red" }}>
              {isDescriptionValid
                ? "Descrizione valida"
                : "Minimo 100, massimo 1000 caratteri (senza spazi iniziali/finali)"}
            </span>
          )}
        </div>

        <button type="submit">Invia</button>
      </form>
    </>
  );
}
