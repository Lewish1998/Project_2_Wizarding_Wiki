import './Style/NavBar.css';
import React, { useState } from "react";
import { Link, redirect } from 'react-router-dom';
import SpellType from './SpellPage/SpellList';

const NavBar = ({handleSpellChange}) => {

    const [type, setType] = useState('')

    const handleClick = (e) => {
        handleSpellChange(e.traget.value)
        setType(e.traget.value)
    }

    const SpellType = [
        'Charm',
        'Spell',
        'HealingSpell',
        'Transfiguration',
        'DarkCharm',
        'Jinx',
        // 'Cures',
        'MagicalTransportation',
        'Conjuration',
        'Hex'
      ]

    //   <div className='flex-center-top'>
    //   <select onChange={handleChange}>
    //     {SpellType.map((SpellType) => {
    //       return (
    //         <option key={SpellType} value={SpellType}>
    //           {SpellType}
    //         </option>
    //       );
    //     })}
    //   </select>
    //   </div>


    return(
        <nav className='nav-container'>
        


            <ul className='navbar'>
                <li id='nav-home'><Link to='/' className='link'>Home</Link></li>
                <div className='dropdown'>
                <button className='dropdown-button link navbar'>Spells</button>
                    <div className='dropdown-content'>
                        <a href='/spells'>All Spells</a>
                        {SpellType.map((SpellType) => {
                          return(<a href='/spells' value={SpellType} key={SpellType} onClick={handleClick}>{SpellType}</a>)
                        })}
                    </div>
                </div>



                {/* <li id='nav-elixirs'><Link to='/elixirs' className='link'>Elixirs</Link></li> */}
                <div className='dropdown'>
                <button className='dropdown-button link navbar'>Elixirs</button>
                    <div className='dropdown-content'>
                        <a href='/elixirs'>All Elixirs</a>
                        <a href='/elixirs'>Advanced</a>
                        <a href='/elixirs'>Moderate</a>
                        <a href='/elixirs'>Average</a>
                        <a href='/elixirs'>Beginner</a>
                        <a href='/elixirs'>One of a Kind</a>
                        <a href='/elixirs'>Unknown</a>
                    </div>
                </div>
            
                <li id='nav-ingredients'><Link to='/ingredients' className='link'>Ingredients</Link></li>
                <li id='nav-houses'><Link to='/houses' className='link'>Houses</Link></li>
            </ul> 
        </nav>
    );
};

export default NavBar;