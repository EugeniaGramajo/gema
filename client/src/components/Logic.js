export const validacionEmail = (email, reEmail, error,setError) => {
  if (email !== reEmail) {
    setError({ ...error, emailError: "Los correos electrónicos no coinciden" });
  } else if (
    !email.includes(
      "@gmail.com" ||
        !email.includes("@hotmail.com") ||
        !email.includes("@outlook.com")
    )
  ) {
    setError({
      ...error,
      emailError:
        "El correo electrónico debe contener '@gmail.com o @hotmail.com o @outlook.com'",
    });
  }
};

export const validacionPassword=(password,rePassword,error,setError)=>{
    if (password !== rePassword) {
  setError({...error,passwordError:"Las contraseñas no coinciden"});
  
} else if (password.length < 6 || !/[A-Z]/.test(password)) {
    setError({...error,passwordError:"La contraseña debe tener al menos 6 caracteres y contener una letra mayúscula"});
  
} 
}

 