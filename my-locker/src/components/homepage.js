import React, { Component,useState, useEffect  } from 'react';
import { BiSearch, BiWallet, BiHomeAlt2} from 'react-icons/bi';
import {SiGooglemaps} from 'react-icons/si'
import { CgProfile } from 'react-icons/cg';
import Swal2 from 'sweetalert2';
import Axios from 'axios';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { cpf } from 'cpf-cnpj-validator';
import './homepage.css';
import Mapa from './location.png';

export default function Homepage() {
 
    return (
    <div className="container">
        <div class="title-form">
          <h1>GuardianX</h1>
        </div>
        <Formik
          initialValues={{}}
        >
          <Form className="login-form">
            
            <div className='mid-screen'>
                <img className='img-map' src={Mapa} alt='Sua localização'/>
                <div className='localizacao'>
                    <label><SiGooglemaps/> Sua localização</label>
                </div>
            </div>


           <div className='barra-items'>
                <ul className='list'>
                    <li>
                        <div className='home-icon'>
                           <BiHomeAlt2 size={20}/>
                        </div>
                    </li>
                    <li>
                        <div className='carteira-icon'>
                           <BiWallet size={20}/>
                        </div>
                    </li>
                    <li>
                        <div className='search-icon'>
                            <BiSearch size={20}/>
                        </div>
                    </li>
                    <li>
                        <div className='profile-icon'>
                            <CgProfile size={20}/>
                        </div>
                    </li>
                </ul>
           </div>
          </Form>
        </Formik>
      </div>
    )
}