import{r as t,b,u as j,j as e,a as d}from"./index-Bs6gLj6-.js";const v=()=>{const[i,m]=t.useState(""),[l,h]=t.useState(""),[c,p]=t.useState(!1),[u,r]=t.useState(""),{login:x}=b(),n=j();t.useEffect(()=>{localStorage.getItem("token")&&n("/especies")},[n]);const f=async s=>{s.preventDefault(),r("");try{const a=await d.post("http://localhost:4000/iniciar-sesion",{email:i,contraseña:l});x(a.data.user,a.data.accessToken,a.data.refreshToken),n("/especies")}catch(a){if(console.error("Hubo un error durante el inicio de sesión:",a),d.isAxiosError(a)){const o=a;if(o.response){const g=o.response.data;o.response.status===401?r("Correo electrónico o contraseña incorrectos."):r(g.error||"Hubo un problema al iniciar sesión")}else o.request?(console.error("Error en la solicitud:",o.message),r("Sin respuesta del servidor")):(console.error("Fallo en el configuracion de la solicitud:",o.message),r("Hubo un fallo al configurar la solicitud"))}else r("Un error general ha ocurrido")}};return t.useEffect(()=>{localStorage.getItem("auth")&&n("/especies")},[n]),e.jsx("div",{className:"d-flex vh-100 justify-content-center align-items-center",children:e.jsxs("div",{className:"w-50 white-bg rounded p-3",children:[u&&e.jsx("p",{className:"mensaje-error",children:u}),e.jsxs("form",{onSubmit:f,children:[e.jsx("h2",{children:"Iniciar Sesión"}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"correo",children:"Correo"}),e.jsx("input",{type:"email",placeholder:"Correo",className:"form-control",id:"correo",value:i,onChange:s=>m(s.target.value),autoComplete:"email"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"contraseña",children:"Contraseña"}),e.jsx("input",{type:c?"text":"password",placeholder:"Contraseña",className:"form-control",id:"contraseña",value:l,onChange:s=>h(s.target.value),autoComplete:"current-password"})]}),e.jsxs("label",{children:["Mostrar Contraseña",e.jsx("input",{type:"checkbox",name:"checkbox",checked:c,onChange:()=>p(!c)})]}),e.jsx("button",{type:"submit",className:"btn",children:"Iniciar Sesión"})]})]})})};export{v as default};
