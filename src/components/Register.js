import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
// import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import apiService from '../api/index';
// import { setUser } from "../redux/actions/userActions";
// import { setToken } from "../redux/actions/tokenActions";
import countries from "../utils/country";



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Transport
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const theme = createTheme();

export default function SignInSide() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", phone: "", country: "" });
    const MySwal = withReactContent(Swal);
    let navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(event);
        // const data = new FormData(event.currentTarget);
        // const name = data.get('name');
        // const email = data.get('email');
        // const password = data.get('password');
        // const phone = data.get('phone');
        // const country = data.get('country-select-demo');

        const { name, email, password, phone, country } = credentials;


        if (email === "" || password === "") {
            return MySwal.fire({
                title: <strong>Error!</strong>,
                html: <p>Please insert valid email or password</p>,
                icon: "error",
            });
        }


        try {
            const response = await apiService.createUser({
                name: name,
                email: email,
                password: password,
                phone: phone,
                country: country,
            });

            localStorage.setItem('token', response.data.authToken);
            navigate("/vehicle");
        } catch (error) {
            // console.log("eroor", error);
            return MySwal.fire({
                title: <strong>Error!</strong>,
                html: <p>{error.response.data.message}</p>,
                icon: "error",
            });
        }
    };

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                onChange={onChange}
                                label="Full Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                onChange={onChange}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={onChange}
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                onChange={onChange}
                                label="Phone Number"
                                name="phone"
                                autoComplete="phone"
                                autoFocus
                            />
                            <Autocomplete
                                id="country"
                                onChange={onChange}
                                sx={{ width: 300 }}
                                options={countries}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                renderOption={(props, option) => (
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <img
                                            loading="lazy"
                                            width="20"
                                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                            alt=""
                                        />
                                        {option.label} ({option.code}) +{option.phone}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Choose a Country"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            {/* <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href='/register' variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid> */}
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}






// import React from 'react';
// import truckImg from '../assets/truck.png';
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { setUser } from "../redux/actions/userActions";
// import { setToken } from "../redux/actions/tokenActions";
// import apiService from '../api/index';


// const Register = () => {
//     // const [users, setUsers] = React.useState([]);
//     const MySwal = withReactContent(Swal);
//     let navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // console.log(event);
//         const data = new FormData(event.currentTarget);
//         const name = data.get('name')
//         const email = data.get('email');
//         const password = data.get('password');
//         const phone = data.get('phone');
//         const country = data.get('country');




//         if (email === "" || password === "") {
//             return MySwal.fire({
//                 title: <strong>Error!</strong>,
//                 html: <p>Please insert valid email or password</p>,
//                 icon: "error",
//             });
//         }
//         else if (phone === "" || country === "") {
//             return MySwal.fire({
//                 title: <strong>Error!</strong>,
//                 html: <p>Please insert valid email or password</p>,
//                 icon: "error",
//             });
//         }

//         try {
//             const response = await apiService.createUser({
//                 name: name,
//                 email: email,
//                 password: password,
//                 phone: phone,
//                 country: country
//             });

//             // localStorage.setItem('token', response.data.authToken);

//             await dispatch(setToken(response.data.authToken));
//             await dispatch(setUser(response.data.user));


//             navigate("/about");
//         } catch (error) {
//             console.log("eroor", error);
//             return MySwal.fire({
//                 title: <strong>Error!</strong>,
//                 html: <p>{error.response.data.message}</p>,
//                 icon: "error",
//             });
//         }
//     }

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-6'>
//                     <img style={{ width: '90%' }} src={truckImg} alt="truck" />
//                 </div>
//                 <div className='col-6 p-5' style={{ fontSize: '14px' }}>
//                     <form>
//                         <div className="mb-3">
//                             <label htmlFor="name" className="form-label font-weight-bold"><b>Name</b></label>
//                             <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter your full name" />
//                         </div>
//                         <div className="form-group mb-3">
//                             <label className="form-label" htmlFor="exampleInputEmail1"><b>Email address</b></label>
//                             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label" htmlFor="password"><b>Password</b></label>
//                             <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" minLength={5} required />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label" htmlFor="cpassword"><b>Confirm Password</b></label>
//                             <input type="password" className="form-control" id="cpassword" name="cpassword" placeholder="Re-enter password" minLength={5} required />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label" htmlFor="typePhone"><b>Phone number</b></label>
//                             <input type="tel" id="typePhone" className="form-control" placeholder="Enter your phone number" />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label" htmlFor="country"><b>Country: </b></label>
//                             <select style={{ border: 'none', paddingLeft: '20px' }}>
//                                 <option value="  " selected>Select a country</option>
//                                 <option value="--">Not Specified</option>
//                                 <option value="AF">Afghanistan</option>
//                                 <option value="AL">Albania</option>
//                                 <option value="DZ">Algeria</option>
//                                 <option value="AS">American Samoa</option>
//                                 <option value="AD">Andorra</option>
//                                 <option value="AO">Angola</option>
//                                 <option value="AI">Anguilla</option>
//                                 <option value="AQ">Antarctica</option>
//                                 <option value="AG">Antigua and Barbuda</option>
//                                 <option value="AR">Argentina</option>
//                                 <option value="AM">Armenia</option>
//                                 <option value="AW">Aruba</option>
//                                 <option value="AU">Australia</option>
//                                 <option value="AT">Austria</option>
//                                 <option value="AZ">Azerbaijan</option>
//                                 <option value="BS">Bahamas</option>
//                                 <option value="BH">Bahrain</option>
//                                 <option value="BD">Bangladesh</option>
//                                 <option value="BB">Barbados</option>
//                                 <option value="BY">Belarus</option>
//                                 <option value="BE">Belgium</option>
//                                 <option value="BZ">Belize</option>
//                                 <option value="BJ">Benin</option>
//                                 <option value="BM">Bermuda</option>
//                                 <option value="BT">Bhutan</option>
//                                 <option value="BO">Bolivia</option>
//                                 <option value="BA">Bosnia and Herzegowina</option>
//                                 <option value="BW">Botswana</option>
//                                 <option value="BV">Bouvet Island</option>
//                                 <option value="BR">Brazil</option>
//                                 <option value="IO">British Indian Ocean Territory</option>
//                                 <option value="BN">Brunei Darussalam</option>
//                                 <option value="BG">Bulgaria</option>
//                                 <option value="BF">Burkina Faso</option>
//                                 <option value="BI">Burundi</option>
//                                 <option value="KH">Cambodia</option>
//                                 <option value="CM">Cameroon</option>
//                                 <option value="CA">Canada</option>
//                                 <option value="CV">Cape Verde</option>
//                                 <option value="KY">Cayman Islands</option>
//                                 <option value="CF">Central African Republic</option>
//                                 <option value="TD">Chad</option>
//                                 <option value="CL">Chile</option>
//                                 <option value="CN">China</option>
//                                 <option value="CX">Christmas Island</option>
//                                 <option value="CC">Cocos (Keeling) Islands</option>
//                                 <option value="CO">Colombia</option>
//                                 <option value="KM">Comoros</option>
//                                 <option value="CG">Congo</option>
//                                 <option value="CD">Congo, the Democratic Republic of the</option>
//                                 <option value="CK">Cook Islands</option>
//                                 <option value="CR">Costa Rica</option>
//                                 <option value="CI">Cote d'Ivoire</option>
//                                 <option value="HR">Croatia (Hrvatska)</option>
//                                 <option value="CU">Cuba</option>
//                                 <option value="CY">Cyprus</option>
//                                 <option value="CZ">Czech Republic</option>
//                                 <option value="DK">Denmark</option>
//                                 <option value="DJ">Djibouti</option>
//                                 <option value="DM">Dominica</option>
//                                 <option value="DO">Dominican Republic</option>
//                                 <option value="TP">East Timor</option>
//                                 <option value="EC">Ecuador</option>
//                                 <option value="EG">Egypt</option>
//                                 <option value="SV">El Salvador</option>
//                                 <option value="GQ">Equatorial Guinea</option>
//                                 <option value="ER">Eritrea</option>
//                                 <option value="EE">Estonia</option>
//                                 <option value="ET">Ethiopia</option>
//                                 <option value="FK">Falkland Islands (Malvinas)</option>
//                                 <option value="FO">Faroe Islands</option>
//                                 <option value="FJ">Fiji</option>
//                                 <option value="FI">Finland</option>
//                                 <option value="FR">France</option>
//                                 <option value="FX">France, Metropolitan</option>
//                                 <option value="GF">French Guiana</option>
//                                 <option value="PF">French Polynesia</option>
//                                 <option value="TF">French Southern Territories</option>
//                                 <option value="GA">Gabon</option>
//                                 <option value="GM">Gambia</option>
//                                 <option value="GE">Georgia</option>
//                                 <option value="DE">Germany</option>
//                                 <option value="GH">Ghana</option>
//                                 <option value="GI">Gibraltar</option>
//                                 <option value="GR">Greece</option>
//                                 <option value="GL">Greenland</option>
//                                 <option value="GD">Grenada</option>
//                                 <option value="GP">Guadeloupe</option>
//                                 <option value="GU">Guam</option>
//                                 <option value="GT">Guatemala</option>
//                                 <option value="GN">Guinea</option>
//                                 <option value="GW">Guinea-Bissau</option>
//                                 <option value="GY">Guyana</option>
//                                 <option value="HT">Haiti</option>
//                                 <option value="HM">Heard and Mc Donald Islands</option>
//                                 <option value="VA">Holy See (Vatican City State)</option>
//                                 <option value="HN">Honduras</option>
//                                 <option value="HK">Hong Kong</option>
//                                 <option value="HU">Hungary</option>
//                                 <option value="IS">Iceland</option>
//                                 <option value="IN">India</option>
//                                 <option value="ID">Indonesia</option>
//                                 <option value="IR">Iran (Islamic Republic of)</option>
//                                 <option value="IQ">Iraq</option>
//                                 <option value="IE">Ireland</option>
//                                 <option value="IL">Israel</option>
//                                 <option value="IT">Italy</option>
//                                 <option value="JM">Jamaica</option>
//                                 <option value="JP">Japan</option>
//                                 <option value="JO">Jordan</option>
//                                 <option value="KZ">Kazakhstan</option>
//                                 <option value="KE">Kenya</option>
//                                 <option value="KI">Kiribati</option>
//                                 <option value="KP">Korea, Democratic People's Republic of</option>
//                                 <option value="KR">Korea, Republic of</option>
//                                 <option value="KW">Kuwait</option>
//                                 <option value="KG">Kyrgyzstan</option>
//                                 <option value="LA">Lao People's Democratic Republic</option>
//                                 <option value="LV">Latvia</option>
//                                 <option value="LB">Lebanon</option>
//                                 <option value="LS">Lesotho</option>
//                                 <option value="LR">Liberia</option>
//                                 <option value="LY">Libyan Arab Jamahiriya</option>
//                                 <option value="LI">Liechtenstein</option>
//                                 <option value="LT">Lithuania</option>
//                                 <option value="LU">Luxembourg</option>
//                                 <option value="MO">Macau</option>
//                                 <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
//                                 <option value="MG">Madagascar</option>
//                                 <option value="MW">Malawi</option>
//                                 <option value="MY">Malaysia</option>
//                                 <option value="MV">Maldives</option>
//                                 <option value="ML">Mali</option>
//                                 <option value="MT">Malta</option>
//                                 <option value="MH">Marshall Islands</option>
//                                 <option value="MQ">Martinique</option>
//                                 <option value="MR">Mauritania</option>
//                                 <option value="MU">Mauritius</option>
//                                 <option value="YT">Mayotte</option>
//                                 <option value="MX">Mexico</option>
//                                 <option value="FM">Micronesia, Federated States of</option>
//                                 <option value="MD">Moldova, Republic of</option>
//                                 <option value="MC">Monaco</option>
//                                 <option value="MN">Mongolia</option>
//                                 <option value="MS">Montserrat</option>
//                                 <option value="MA">Morocco</option>
//                                 <option value="MZ">Mozambique</option>
//                                 <option value="MM">Myanmar</option>
//                                 <option value="NA">Namibia</option>
//                                 <option value="NR">Nauru</option>
//                                 <option value="NP">Nepal</option>
//                                 <option value="NL">Netherlands</option>
//                                 <option value="AN">Netherlands Antilles</option>
//                                 <option value="NC">New Caledonia</option>
//                                 <option value="NZ">New Zealand</option>
//                                 <option value="NI">Nicaragua</option>
//                                 <option value="NE">Niger</option>
//                                 <option value="NG">Nigeria</option>
//                                 <option value="NU">Niue</option>
//                                 <option value="NF">Norfolk Island</option>
//                                 <option value="MP">Northern Mariana Islands</option>
//                                 <option value="NO">Norway</option>
//                                 <option value="OM">Oman</option>
//                                 <option value="PK">Pakistan</option>
//                                 <option value="PW">Palau</option>
//                                 <option value="PA">Panama</option>
//                                 <option value="PG">Papua New Guinea</option>
//                                 <option value="PY">Paraguay</option>
//                                 <option value="PE">Peru</option>
//                                 <option value="PH">Philippines</option>
//                                 <option value="PN">Pitcairn</option>
//                                 <option value="PL">Poland</option>
//                                 <option value="PT">Portugal</option>
//                                 <option value="PR">Puerto Rico</option>
//                                 <option value="QA">Qatar</option>
//                                 <option value="RE">Reunion</option>
//                                 <option value="RO">Romania</option>
//                                 <option value="RU">Russian Federation</option>
//                                 <option value="RW">Rwanda</option>
//                                 <option value="KN">Saint Kitts and Nevis</option>
//                                 <option value="LC">Saint LUCIA</option>
//                                 <option value="VC">Saint Vincent and the Grenadines</option>
//                                 <option value="WS">Samoa</option>
//                                 <option value="SM">San Marino</option>
//                                 <option value="ST">Sao Tome and Principe</option>
//                                 <option value="SA">Saudi Arabia</option>
//                                 <option value="SN">Senegal</option>
//                                 <option value="SC">Seychelles</option>
//                                 <option value="SL">Sierra Leone</option>
//                                 <option value="SG">Singapore</option>
//                                 <option value="SK">Slovakia (Slovak Republic)</option>
//                                 <option value="SI">Slovenia</option>
//                                 <option value="SB">Solomon Islands</option>
//                                 <option value="SO">Somalia</option>
//                                 <option value="ZA">South Africa</option>
//                                 <option value="GS">South Georgia and the South Sandwich Islands</option>
//                                 <option value="ES">Spain</option>
//                                 <option value="LK">Sri Lanka</option>
//                                 <option value="SH">St. Helena</option>
//                                 <option value="PM">St. Pierre and Miquelon</option>
//                                 <option value="SD">Sudan</option>
//                                 <option value="SR">Suriname</option>
//                                 <option value="SJ">Svalbard and Jan Mayen Islands</option>
//                                 <option value="SZ">Swaziland</option>
//                                 <option value="SE">Sweden</option>
//                                 <option value="CH">Switzerland</option>
//                                 <option value="SY">Syrian Arab Republic</option>
//                                 <option value="TW">Taiwan, Province of China</option>
//                                 <option value="TJ">Tajikistan</option>
//                                 <option value="TZ">Tanzania, United Republic of</option>
//                                 <option value="TH">Thailand</option>
//                                 <option value="TG">Togo</option>
//                                 <option value="TK">Tokelau</option>
//                                 <option value="TO">Tonga</option>
//                                 <option value="TT">Trinidad and Tobago</option>
//                                 <option value="TN">Tunisia</option>
//                                 <option value="TR">Turkey</option>
//                                 <option value="TM">Turkmenistan</option>
//                                 <option value="TC">Turks and Caicos Islands</option>
//                                 <option value="TV">Tuvalu</option>
//                                 <option value="UG">Uganda</option>
//                                 <option value="UA">Ukraine</option>
//                                 <option value="AE">United Arab Emirates</option>
//                                 <option value="GB">United Kingdom</option>
//                                 <option value="US">United States</option>
//                                 <option value="UM">United States Minor Outlying Islands</option>
//                                 <option value="UY">Uruguay</option>
//                                 <option value="UZ">Uzbekistan</option>
//                                 <option value="VU">Vanuatu</option>
//                                 <option value="VE">Venezuela</option>
//                                 <option value="VN">Viet Nam</option>
//                                 <option value="VG">Virgin Islands (British)</option>
//                                 <option value="VI">Virgin Islands (U.S.)</option>
//                                 <option value="WF">Wallis and Futuna Islands</option>
//                                 <option value="EH">Western Sahara</option>
//                                 <option value="YE">Yemen</option>
//                                 <option value="YU">Yugoslavia</option>
//                                 <option value="ZM">Zambia</option>
//                                 <option value="ZW">Zimbabwe</option>
//                             </select>
//                         </div>
//                         <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
//                     </form>
//                 </div>
//             </div >
//         </div >
//     )
// }

// export default Register