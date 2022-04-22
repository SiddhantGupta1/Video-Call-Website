import React, {createContext, useState, useRef, useEffect} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer'; 

const SocketContext = createContext()

const socket = io('http://localhost:5000')

const ContextProvider = ({children}) => {

    const [stream, setStream] = useState(null)

    const myVideo = useRef()

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentState) => {
            setStream(currentState)

            myVideo.current.srcObject = currentState
        })
    })
}