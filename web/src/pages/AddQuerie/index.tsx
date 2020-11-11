import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { Marker, TileLayer, Map } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import mapIcon from '../../utils/mapIcon';
import { Container, ContainerData } from './style';
import api from '../../services/api';

const AddQuerie: React.FC = () => {

    const history = useHistory();
    const { user } = useAuth();
    const { addToast } = useToast();
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    function handleMapClick(event: LeafletMouseEvent){
      const { lat, lng } = event.latlng;
      setPosition({
        latitude: lat,
        longitude: lng
      });
    }

    async function handleSubmit(e: FormEvent){
      e.preventDefault();
      const { latitude, longitude } = position;
      const data = {
        title,
        description,
        date,
        time,
        latitude,
        longitude,
        user_querie: user.id
      };
      await api.post('querie', data);

      history.push('querie');
      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Sua consulta já foi agendada.'
      });
    }
    return(
        <Container onSubmit={handleSubmit}>

                  <Map
                    center={[-23.4175551,-46.8931377]}
                    style={{ width: '40%', height: '100%' }}
                    zoom={15}
                    onClick={handleMapClick}
                  >
                    <TileLayer
                      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />

                    { position.latitude !== 0 && (
                      <Marker
                        interactive={false}
                        icon={mapIcon}
                        position={[
                          position.latitude,
                          position.longitude
                        ]}
                      />
                    )
                  }
                  </Map>
                  <ContainerData>
                    <span>Titulo</span>
                    <input
                      type="text"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                    <span>Descrição</span>
                    <textarea
                      cols={46}
                      rows={4}
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    ></textarea>
                      <span>Data</span>
                      <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                      />
                      <span>Horário</span>

                      <input
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                      />

                    <button type="submit">Adicionar</button>
                  </ContainerData>

        </Container>

    );
}

export default AddQuerie;
