import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const SupabaseExamples = () => {
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [itemName, setItemName] = useState('');

    const handleFileUpload = async (event) => {
        try {
            setUploading(true);
            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `manga-covers/${fileName}`;

            // 1. Upload the picture to Supabase Storage
            // Make sure you have created a bucket named 'manga-images'
            let { error: uploadError } = await supabase.storage
                .from('manga-images')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            // 2. Get the public URL
            const { data } = supabase.storage
                .from('manga-images')
                .getPublicUrl(filePath);
            
            setImageUrl(data.publicUrl);
            alert('Image uploaded successfully!');
        } catch (error) {
            alert(error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleInsertData = async () => {
        try {
            if (!itemName) return alert('Please enter a name');
            if (!imageUrl) return alert('Please upload an image first');

            // 3. Insert an "element" into the database
            // Make sure you have a table named 'manga_items' with columns 'name' and 'image_url'
            const { data, error } = await supabase
                .from('manga_items')
                .insert([
                    { name: itemName, image_url: imageUrl }
                ])
                .select();

            if (error) throw error;

            alert('Data inserted successfully!');
            console.log('Inserted data:', data);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px' }}>
            <h2>Supabase Storage & Database Demo</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <h3>1. Attach Picture (Storage)</h3>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileUpload} 
                    disabled={uploading}
                />
                {uploading ? <p>Uploading...</p> : null}
                {imageUrl && (
                    <div style={{ marginTop: '10px' }}>
                        <p>Preview:</p>
                        <img src={imageUrl} alt="Uploaded" style={{ width: '150px', borderRadius: '4px' }} />
                    </div>
                )}
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <h3>2. Attach Element (Database)</h3>
                <input 
                    type="text" 
                    placeholder="Manga Name" 
                    value={itemName} 
                    onChange={(e) => setItemName(e.target.value)}
                    style={{ padding: '8px', marginRight: '10px' }}
                />
                <button 
                    onClick={handleInsertData}
                    style={{ padding: '8px 16px', cursor: 'pointer' }}
                >
                    Save to Database
                </button>
            </div>
        </div>
    );
};

export default SupabaseExamples;
