import React, { useEffect, useState } from "react";
import arte from "../images/arte.png";
import "./RelatarIdentificado.css";
import { ReactComponent as Arte } from "../images/arte.svg";
import { Link } from "react-router-dom";
import { TbUserOff, TbUser } from "react-icons/tb";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseconfig';
import { getFirestore , doc, setDoc } from "firebase/firestore";

export const RelatarIdentificado = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [titulo, setTitulo] = useState();
  const [endereco, setEndereco] = useState();
  const [descricao, setDescricao] = useState();
  const [preview, setPreview] = useState();
  const [imgName, setImgName] = useState();
  const [progress, setProgress] = useState();
  const [imgURL, setImgURL] = useState();

  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  const db = getFirestore(app);


  const enviarRelato = async () => {
    const storageRef = ref(storage, `images/${selectedFile.name}`);
    const uploadImg = await uploadBytesResumable(storageRef, selectedFile)

    await uploadImg.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadImg.snapshot.ref).then(url => {
          setImgURL(url);
        })
      }
    ).then(async () => {
      await setDoc(doc(db, "relatos"), {
        nome: nome,
        telefone: telefone,
        email: email,
        titulo: titulo,
        endereco: endereco,
        descricao: descricao,
        imgURL: imgURL,
      }).catch((error) => {
        alert(error);
      })
    })
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    setImgName(selectedFile.name);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <section className="content">
        <form>
        <div className="formContent">
            <h1 className="formTitle">Relato Identificado</h1>
            <label>
              <p>
                Nome Completo:<span>*</span>
              </p>
              <input type="text" name="name" className="titleInput" value={nome} onChange={(text) => {setNome(text); console.log(nome)}}/>
            </label>
            <label>
              <p>
                Telefone:<span>*</span>
              </p>
              <input
                type="number"
                name="adress"
                className="adressInput"
                 value={telefone} onChange={(text) => setTelefone(text)}
              />
            </label>
            <label>
              <p>
                Email:
              </p>
              <input
                type="text"
                name="email"
                className="titleInput"
                 value={email} onChange={(text) => setEmail(text)}
              />
            </label>
            <label>
              <p>
                Título do relato:<span>*</span>
              </p>
              <input type="text" name="title" className="titleInput"  />
            </label>
            <label>
              <p>
                Endereço do relato:<span>*</span>
              </p>
              <input
                type="text"
                name="adress"
                className="adressInput"
                
              />
            </label>
            <p>
              Descrição do relato:<span>*</span>
            </p>
            <textarea  />
            <div className="pickerButton">
              <label className="fileInputArea">
                <p className="buttonFileText">Anexar imagem</p>
                <input
                  type="file"
                  onChange={onSelectFile}
                  placeholder="Anexar imagem"
                  className="fileInput"
                  
                  name="fileInput"
                />
              </label>
              <span className="mensagemImagem">
                (Se possível, anexe uma imagem)
              </span>
            </div>
            <input type="submit" value="Enviar" onClick={() => enviarRelato()}/>
          </div>
          {selectedFile && (
            <div className="imageInfos">
              <img src={preview} className="preview" />
              <p>{imgName}</p>
            </div>
          )}
        </form>
        <hr/>
        <Link to="/relatar" className="buttonArea">
          <p className="buttonText">VOLTAR</p>
        </Link>
      </section>
    </div>
  );
};
