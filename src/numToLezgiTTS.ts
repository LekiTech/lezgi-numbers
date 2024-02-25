import path from 'path';
import { numToLezgiArray } from './numToLezgi';

function concatenateAudiosNode(urls: string[], outputFile: string) {
  const ffmpeg = require('fluent-ffmpeg');
  let command = ffmpeg();

  urls.forEach((file) => {
    command = command.input(file);
    if (file.startsWith(' .')) {
      const offset = 0.1;
      command.inputOption(`-itsoffset ${offset}`);
    }
  });

  const filter = `amix=inputs=${urls.length}:duration=first:dropout_transition='0.3'`;
  // urls.map((_, index) => `[${index}:a]`).join('') + `amix=inputs=${urls.length}:duration=longest`;
  command.complexFilter(filter);

  command
    .on('error', (err) => {
      console.log('An error occurred: ' + err.message);
    })
    .on('end', () => {
      console.log('Concatenation finished');
    })
    .mergeToFile(outputFile, '/tmp');
}

function concatenateAudiosBrowser(urls) {
  // @ts-ignore
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  async function fetchAudio(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return audioContext.decodeAudioData(arrayBuffer);
  }

  Promise.all(urls.map((url) => fetchAudio(url)))
    .then((buffers) => {
      let totalLength = buffers.reduce((acc, buffer) => acc + buffer.length, 0);
      let output = audioContext.createBuffer(1, totalLength, audioContext.sampleRate);

      let offset = 0;
      buffers.forEach((buffer) => {
        output.getChannelData(0).set(buffer.getChannelData(0), offset);
        offset += buffer.length;
      });
    })
    .then((concatenatedBuffer) => {
      let source = audioContext.createBufferSource();
      source.buffer = concatenatedBuffer;
      source.connect(audioContext.destination);
      source.start(0);
    });
}

export function concatenateAudios(input: string[], output: string = 'concatenated.mp3'): void {
  if (typeof window === 'undefined') {
    concatenateAudiosNode(input, output);
  } else {
    concatenateAudiosBrowser(input);
  }
}

export function numToLezgiTTS(num: number): void {
  const audioFiles = numToLezgiArray(num)
    .map((numeral) => numeral.trim())
    .filter((numeral) => numeral !== '')
    .map((numeral) => path.join(__dirname, `../static/_${numeral}.mp3`));
  concatenateAudios(audioFiles, `${num}.mp3`);
}

numToLezgiTTS(107);
numToLezgiTTS(700);

/*
Unique audio parts are concatenated into a single audio file:
[
  "цIе",
  "цIу",
  "цIи",
  "ни",
  "минус",
  "нул",
  "сад",
  "кьвед",
  "пуд",
  "кьуд",
  "вад",
  "ругуд",
  "ирид",
  "муьжуьд",
  "кIуьд",
  "цIуд",
  "къад",
  "яхцIур",
  "виш",
  "агъзур",
  "миллион",
  "миллиард",
  "триллион",
  "квадриллион",
  "квинтиллион",
  "секстиллион",
  "септиллион",
  "октиллион",
  "нониллион"
]
*/
