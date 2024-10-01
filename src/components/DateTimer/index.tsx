import  { useState, useEffect } from 'react';

const Timer = () => {
    // Estado para armazenar o tempo
    const [actualTime, setActualTime] = useState(new Date());

    // Efeito que atualiza o tempo a cada segundo
    useEffect(() => {
        // Função para atualizar o estado com a data/hora atual
        const tick = () => {
            setActualTime(new Date());
        };

        // Configura um intervalo que chama a função tick a cada 1000ms (1 segundo)
        const timerID = setInterval(tick, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(timerID);
    }, []); // O array vazio significa que o efeito roda apenas uma vez após o primeiro render

    // Formatação da data/hora para visualização
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString(); // Formata para o horário local
    };

    return (
        <div>
            <h1>Timer</h1>
            <p>{formatTime(actualTime)}</p>
        </div>
    );
};

export default Timer;
