import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/rana-paul-06b5591b5/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Rana-Paul" target='_blank'><FaGithub /></a>
        <a href="https://twitter.com/ranapaul741223" target='_blank'><BsTwitter /></a>
        <a href="https://www.youtube.com/channel/UCL5hluZDGECUeidtBFr_iMg" target='_blank'><AiFillYoutube /></a>
    </div>
  )
}

export default HeaderSocials