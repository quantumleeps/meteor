import { loadPlants } from './load-plants.ts';
import { Meteor} from 'meteor/meteor';

Meteor.startup(loadPlants);