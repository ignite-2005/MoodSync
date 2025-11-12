import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPlaylists } from '../services_api';
import AudioPlayer from '../components/AudioPlayer';

export default function Playlists() {
  const [params] = useSearchParams();
  const [data, setData] = useState([]);
  const mood = params.get('mood') || '';

  useEffect(() => {
    (async () => {
      const r = await getPlaylists(mood);
      setData(r.playlists || []);
    })();
  }, [mood]);

  return (
    <div>
      <h1>Playlists {mood ? `for ${mood}` : ''}</h1>
      {data.length === 0 && <div className="small">No playlists found. Try seeding the DB.</div>}
      {data.map(list => (
        <div key={list._id} className="card" style={{ marginTop: 12 }}>
          <h3>{list.title}</h3>
          <div className="small">{list.description}</div>
          <div>
            {list.tracks.map((t, idx) => (
              <AudioPlayer key={idx} title={t.title} url={t.url} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
