import React, { useEffect, useState } from 'react';
import arte from "../images/arte.png";
import "./RelatarAnonimamente.css";
import { ReactComponent as Arte } from "../images/arte.svg";
import { Link } from "react-router-dom";
import { TbUserOff, TbUser } from "react-icons/tb";

export const RelatarAnonimamente = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState();

  useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

  return (
    <div>
      <section className="content">
        <h1>Relato Anônimo</h1>
        <form>
          <label>
            <p>Título do relato:<span>*</span></p>
            <input type="text" name="title" className="titleInput" required/>
          </label>
          <label>
            <p>Endereço do relato:<span>*</span></p>
            <input type="text" name="adress" className="adressInput" required/>
          </label>
          <p>Descrição do relato:<span>*</span></p>
          <textarea required/>
          <label className="fileInputArea">
            <p className="buttonFileText">Anexar imagem</p>
            <input type='file' onChange={onSelectFile} placeholder="Anexar imagem" className="fileInput" required name="fileInput"/>
          </label>
          {selectedFile &&  <img src={preview} /> }
        </form>
      </section>
    </div>
  );
};
