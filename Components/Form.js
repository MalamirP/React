// import React, { useState } from "react";

// export default function Form() {

//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [passConfirm, setPassConfirm] = useState('');
//     const [email, setEmail] = useState('');
//     const [city, setCity] = useState('');
//     const [gender, setGender] = useState('');
//     const [music, setMusic] = useState([]);
//     const [erors, setErros] = useState({
//         name: '',
//         password: '',

//         email: '',
//         city: '',
//         gender: '',
//         music: ''
//     });

//     function handleName(e) {
//         setName(e.target.value)
//     }

//     function handlePassword(e) {
//         setPassword(e.target.value)
//     }

//     function handlePasswordConfirm(e) {
//         setPassConfirm(e.target.value)
//     }

//     function handleEmail(e) {
//         setEmail(e.target.value)
//     }

//     function handleCity(e) {
//         setCity(e.target.value)
//     }

//     function handleGender(e) {
//         setGender(e.target.value)
//     }

//     // if (e.target.checked === true) {
//     //     setMusic([...music, 'rap'])
//     // } else {
//     //     setMusic(music.filter(rap => {
//     //         return rap != 'rock'
//     //     }))
//     // }
//     // // if (e.target.checked === true) {
//     // //     setMusic([...music, 'pop'])
//     // // } else {
//     // //     setMusic(music.filter(pop => {
//     // //         return pop != 'rock'
//     // //     }))
//     // // }


//     function handleErors(e) {
//         setErros(e.target.value)
//     }


//     return (
//         <form >
//             <label>Name</label>
//             <input
//                 placeholder='Type your name'
//                 type='text'
//                 onChange={handleName}
//             />
//             <span>{erors.name}</span>
//             <br />
//             <label>Password</label>
//             <input
//                 placeholder='Type your password'
//                 type='password'
//                 onChange={handlePasswordConfirm}
//             />
//             <span>{erors.password}</span>
//             <br />

//             <label>Confrim password</label>
//             <input
//                 placeholder='Confirm your password'
//                 type='password'
//                 onChange={handlePassword}
//             />
//             <span>{erors.password}</span>
//             <br />

//             <label>Email</label>
//             <input
//                 placeholder='Type your name'
//                 type='email'
//                 onClick={handleEmail}
//             />
//             <span>{erors.email}</span>

//             <br />
//             <br />

//             <label>City</label>
//             <select onChange={handleCity}>
//                 <option value=''>Choose</option>
//                 <option value='Sofia'>Sofia</option>
//                 <option value='Vratsa'>Vratsa</option>
//                 <option value='Burgas'>Burgas</option>
//             </select>
//             <span>{erors.city}</span>

//             <br />
//             <br />

//             <label>Man</label>
//             <input
//                 type='radio'
//                 name='gender'
//                 onClick={handleGender}
//             />
//             <label>Woman</label>
//             <input
//                 type='radio'
//                 name='gender'
//                 onClick={handleGender}
//             />

//             <span>{erors.gender}</span>
//             <br />


//             <br />

//             <label>Rock</label>
//             <input
//                 type='checkbox'
//                 onClick={(e) => {
//                     if (e.target.checked === true) {
//                         setMusic([...music, 'rap'])
//                     }
//                     else {
//                         setMusic(music.filter(m => m != 'rap'))
//                     }
//                 }} />

//             <label>Rap</label>
//             <input
//                 type='checkbox'
//                 onClick={(e) => {
//                     if (e.target.checked === true) {
//                         setMusic([...music, 'rap'])
//                     }
//                     else {
//                         setMusic(music.filter(m => m != 'rap'))
//                     }
//                 }} />

//             <label>Pop</label>
//             <input
//                 type='checkbox'
//                 onClick={(e) => {
//                     if (e.target.checked === true) {
//                         setMusic([...music, 'pop'])
//                     }
//                     else {
//                         setMusic(music.filter(m => m != 'pop'))
//                     }
//                 }} />

//             <span>{erors.music}</span>
//             <br />
//             <button onClick={() => {
//                 let err = erors

//                 if (name.length < 4) {
//                     err.name = 'Invalid name'
//                 } else {
//                     err.name = ''
//                 }

//                 if (email === '') {
//                     err.email = 'Invalid email'
//                 } else {
//                     err.email = ''
//                 }

//                 if (password === '' || password != passConfirm) {
//                     err.password = 'Invalid password'
//                 } else {
//                     err.password = ''
//                 }

//                 if (gender === '') {
//                     err.gender = 'Choose gender'
//                 } else {
//                     err.gender = ''
//                 }

//                 if (music.length === 0) {
//                     err.music = 'Invalid Music'
//                 } else {
//                     err.music = ''
//                 }

//                 if (city === '') {
//                     err.city = 'Choose city'
//                 } else {
//                     err.city = ''
//                 }

//                 setErros({ ...erors, err })
//             }} type='button'>Submit</button>
//         </form>

//     )
// }