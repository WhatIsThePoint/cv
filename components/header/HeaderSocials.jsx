import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/WhatIsThePoint" target="_blank"><AiOutlineGithub/></a>
        <a href="https://twitter.com/excited_undead" target="_blank"><AiFillTwitterCircle/></a>
        <a href="https://www.facebook.com/profile.php?id=100009152245352" target="_blank"><BsDiscord/></a>
        <a href="https://www.instagram.com/youssef._.hammi/" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials