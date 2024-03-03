import { numToLezgiArray } from './numToLezgi';

function concatenateAudiosBrowser(urls: string[]) {
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
      return output;
    })
    .then((concatenatedBuffer) => {
      let source = audioContext.createBufferSource();
      source.buffer = concatenatedBuffer;
      source.connect(audioContext.destination);
      source.start(0);
    });
}

function numberToSpokenLezgiAudioFiles(num: number, audioFilesPath: string): string[] {
  const lezgiNumeralArray = numToLezgiArray(num);
  const audioFiles = lezgiNumeralArray
    .map((numeral) => (numeral !== ' ' ? numeral.trim() : ' '))
    .filter((numeral) => numeral !== '')
    .map((numeral) => `${audioFilesPath}/${numeral}.mp3`);
  return audioFiles;
}

/**
 * Play spoken Lezgi Text-To-Speech audio for a number
 *
 * @param num number to play as spoken Lezgi TTS audio
 * @param audioFilesPath path to the directory containing the base audio files
 */
export function playLezgiNumberTts(num: number, audioFilesPath: string): void {
  const audioFiles = numberToSpokenLezgiAudioFiles(num, audioFilesPath);
  console.log(audioFiles);
  console.log('Playing audio...');
  concatenateAudiosBrowser(audioFiles);
}

/*
Unique audio parts are concatenated into a single audio file:
[
  // different parts that are not necessarily a number, but are used in the number system
  " ",
  "цIе",
  "цIу",
  "цIи",
  "ни",
  "рид", // from "ирид"
  "къанни", // 20+
  "кьве",
  "минус",
  
  // numbers
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
