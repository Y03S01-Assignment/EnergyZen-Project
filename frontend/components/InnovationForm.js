import React from 'react';

export default function InnovationForm() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Innovation Submissoin Form</h1>
      <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319">
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>First Name</label>
          <input type="text" name="firstName" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Last Name</label>
          <input type="text" name="lastName" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input type="text" name="email" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Phone</label>
          <input type="number" name="phoneNumber" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
          <textarea name="description" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
        </div>

        <button type="submit" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit Request</button>
      </form>
    </div>
  );
}


