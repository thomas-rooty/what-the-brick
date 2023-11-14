export const sendPhotoToServer = async (photo) => {
  const formData = new FormData();
  formData.append('file', {
    uri: photo.uri,
    type: 'image/jpeg',
    name: 'photo.jpg',
  });

  const response = await fetch('http://172.20.10.14:5000/detect_legos', {
    method: 'POST',
    body: formData,
  });

  return await response.json();
}

export const guessBricks = async (bricks) => {
  // Check if bricks is valid and has data
  if (!bricks || !bricks.data) {
    throw new Error('Invalid bricks data');
  }

  // Create an array to store the URLs
  const urls = bricks.data.map(brick => brick.image_path);

  try {
    // Prepare the request body
    const requestBody = {
      urls: urls
    };

    // Send the request
    const response = await fetch('http://172.20.10.14:5000/guess_lego', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Return the response
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
