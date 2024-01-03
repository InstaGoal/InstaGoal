import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: any) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')
  const date = searchParams.get('date')
  const result = searchParams.get('result')

  const fontHeartResponse = await fetch(
    new URL('../../../../public/HEART__.ttf', import.meta.url)
  )
  const fontHeartData = await fontHeartResponse.arrayBuffer()

  const fontMontResponse = await fetch(
    new URL('../../../../public/MONT-BLACK__.ttf', import.meta.url)
  )
  const fontMontData = await fontMontResponse.arrayBuffer()

  const imageData = await fetch(new URL('../../../../public/template.svg', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  const imageDataArray = Array.from(new Uint8Array(imageData));
  const imageDataString = imageDataArray.map(byte => String.fromCharCode(byte)).join('');
  const base64ImageData = btoa(imageDataString);


  return new ImageResponse(
    (
      <div style={{ display: 'flex' }}>
        <img src={`data:image/svg+xml;base64,${base64ImageData}`} />
        <div
          style={{
            position: 'absolute',
            fontSize: 362,
            color: '#ececec',
            width: '100%',
            height: '100%',
            top: '330px',
            textAlign: 'center',
            justifyContent: 'center',
            fontFamily: '"Heathergreen"'
          }}
        >
          {title}
        </div>
        <div
          style={{
            position: 'absolute',
            fontSize: 25,
            color: '#121212',
            left: 0,
            right: 0,
            margin: '0 400px',
            top: '800px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"Montserrat"',
            backgroundColor: '#ceaf77',
            padding: '5px 0 10px'
          }}
        >
          {date}
        </div>
        <div
          style={{
            position: 'absolute',
            fontSize: 305,
            color: '#ceaf77',
            width: '100%',
            height: '100%',
            top: '900px',
            textAlign: 'center',
            justifyContent: 'center',
            fontFamily: '"Heathergreen"',
            letterSpacing: 20
          }}
        >
          {result}
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1920,
      fonts: [
        {
          name: 'Heathergreen',
          data: fontHeartData,
          style: 'normal'
        },
        {
          name: 'Montserrat',
          data: fontMontData,
          style: 'normal'
        }
      ]
    }
  )
}
