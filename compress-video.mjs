import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import path from 'node:path';

// Set the path explicitly
ffmpeg.setFfmpegPath(ffmpegPath);

// Define paths (path.resolve works relative to where you run the command)
const inputFile = path.resolve('public/images/002 Aerial.mp4');
const outputFile = path.resolve('public/images/002_Aerial_optimized.mp4');

console.log(`🎬 Compressing video...`);
console.log(`   Input: ${inputFile}`);

ffmpeg(inputFile)
  .noAudio() 
  .size('1920x?') 
  .videoCodec('libx264')
  .outputOptions([
    '-crf 28',             
    '-preset slow',         
    '-movflags +faststart'  
  ])
  .on('end', () => {
    console.log(`✅ Success! Created: 002_Aerial_optimized.mp4`);
  })
  .on('error', (err) => {
    console.error('❌ Error occurred:', err);
  })
  .save(outputFile);