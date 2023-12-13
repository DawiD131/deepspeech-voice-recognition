const DeepSpeech = require('deepspeech')
const fs = require('fs');

require('dotenv').config();


const MODEL_PATH = process.env.MODEL_PATH;
const SCORER_PATH = process.env.SCORER_PATH;


const AUDIO_PATH = './audio.wa';

const KEYWORD = 'hello';

const model = new DeepSpeech.Model(MODEL_PATH);
model.enableExternalScorer(SCORER_PATH);

const audioBuffer = fs.readFileSync(AUDIO_PATH);
const audioData = new Int16Array(audioBuffer.buffer);

const result = model.stt(audioData);

if (result.toLowerCase().includes(KEYWORD.toLowerCase())) {
    console.log(`Keyword "${KEYWORD}"`);
} else {
    console.log(`not found`);
}
