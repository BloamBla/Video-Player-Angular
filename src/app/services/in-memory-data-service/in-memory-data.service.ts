import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [{
      title: 'Big Buck Bunny',
      description: 'Big Buck wakes up in his rabbit hole, only to be pestered by three critters, Gimera, Frank and Rinky. When Gimera ' +
        'kills a butterfly, Buck decides on a payback Predator-style',
      video: 'assets/video/BigBuckBunny_320x180.mp4',
      director: 'Sacha Goedegebure',
      preview: 'assets/preview/big_bucks_bunny.jpg'
    }, {
      title: 'Elephants Dream',
      description: 'Emo and Proog are two men exploring a strange industrial world of the future.',
      video: 'assets/video/elephants_dream.mp4',
      director: 'Bassam Kurdali',
      preview: 'assets/preview/elephants_dream.jpg'
    }, {
      title: 'Sintel',
      description: 'The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.',
      video: 'assets/video/sintel-1024-surround.mp4',
      director: 'Colin Levy',
      preview: 'assets/preview/sintel.jpg'
    }, {
      title: 'Tears of Steel',
      description: 'The short science fiction film is about a group of warriors and scientists who gather at the Oude Kerk in a future ' +
        'Amsterdam to stage a crucial event from the past in a desperate attempt to rescue the world from destructive robots',
      video: 'assets/video/tears-of-steel_teaser.mp4',
      director: 'Ian Hubert',
      preview: 'assets/preview/tears_of_steel.jpg'
    }, {
      title: 'Triple B',
      description: 'Big Buck wakes up in his rabbit hole, only to be pestered by three critters, Gimera, Frank and Rinky. When Gimera ' +
        'kills a butterfly, Buck decides on a payback Predator-style',
      video: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
      director: 'Blender',
      preview: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg'
    }];
    return {movies};
  }
}
