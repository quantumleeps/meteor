import {Mongo} from 'meteor/mongo';
 
export let Plants = new Mongo.Collection<Plant>('plants');