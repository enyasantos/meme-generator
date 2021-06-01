import React, { useState, useEffect } from 'react';
import qs from 'qs';
import download from 'downloadjs';

import { Wrapper, Logo, Card, Templates, Form, Button, Preview } from './styles';
import LogoImage from '../../images/logo.png';

export default function Home() {

    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [ boxes, setBoxes ] = useState([]);
    const [ generetadMeme, setGeneratedMeme] = useState(null);

    //currying -> função que retorna outra função
    const handleInputChange = (index) => (e) => {
        const newValues = boxes;
        newValues[index] = e.target.value;
        setBoxes(newValues);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const params = qs.stringify({
            template_id: selectedTemplate.id,
            username: `${process.env.REACT_APP_IMGFLIP_USERNAME}`,
            password: `${process.env.REACT_APP_IMGFLIP_PASSWORD}`,
            boxes: boxes.map(text => ({ text })),
        });

        const response = await fetch(`https://api.imgflip.com/caption_image?${params}`);

        const { data: { url }} = await response.json();

        setGeneratedMeme(url);
    };

    function handleSelectedTemplate(template) {
        setSelectedTemplate(template);
        setBoxes([]);
    }

    function handleReset(e) {
        e.preventDefault();
        setSelectedTemplate(null);
        setBoxes([]);
        setGeneratedMeme(null);
    }

    async function handleDownloadImage(e) {
        e.preventDefault();
        const response = await fetch(generetadMeme);
        const blob = await response.blob();
        download(blob, `${selectedTemplate.name}.jpg`);
    }

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const { data: { memes } } = await response.json();
            setTemplates(memes);
        })();
    },[])

    return (
        <Wrapper>
            <Logo src={LogoImage} />
            <Card>
                {generetadMeme && (
                    <>
                        <img src={generetadMeme} alt="Generated meme"/>
                        <Button 
                            type="submit" 
                            onClick={e => handleDownloadImage(e)}
                            style={{ margin: '10px 0'}}
                        >
                            Baixar meme
                        </Button>
                        <Button 
                            type="submit" 
                            onClick={e => handleReset(e)}
                        >
                            Criar outro meme
                        </Button>
                    </>
                )}
                {!generetadMeme && (
                    <>
                        <h2>Selecione um template</h2>
                        <Templates>
                            {templates.map(template => (
                                <button
                                    key={template.id}
                                    type='button'
                                    onClick={e => handleSelectedTemplate(template)}
                                    className={template.id === selectedTemplate?.id ? 'selected' : ''}
                                >
                                    <img src={template.url} alt={template.name} />
                                </button>
                            ))}
                        </Templates>

                        {selectedTemplate &&
                            <Preview>
                                <h3>Preview do meme</h3>
                                <img src={selectedTemplate.url} alt={selectedTemplate.name}/>
                            </Preview>
                        }
        
                        {selectedTemplate && 
                            <>
                            <h2>Textos</h2>
                            <Form onSubmit={e => handleSubmit(e)}>
                                {(new Array(selectedTemplate.box_count).fill('').map((_, index) => (
                                    <input 
                                        key={String(Math.random())}
                                        placeholder={`Texto ${index + 1}`} 
                                        onChange={handleInputChange(index)}
                                    />
                                )))}
        
                                <Button type="submit">GeneretaMyMeme</Button>
                            </Form>
                            </>
                        }
                    </>
                )}
            </Card>
        </Wrapper>
    );
}