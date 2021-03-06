import { Plants } from '../collections/plants.ts';

export function loadPlants() {
    if (Plants.find().count() === 0) {
        var plants = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.',
        'location': 'Palo Alto'
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!',
        'location': 'Palo Alto'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'location': 'San Francisco'
      }
    ];
        for (var i = 0; i < plants.length; i++) {
      Plants.insert(plants[i]);
    }
    }
}