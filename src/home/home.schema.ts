/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HomeDocument = Home & Document;


export class About {
  @Prop()
  aboutheading: string;

  @Prop()
  aboutinfo1: string;

  @Prop()
  aboutspan: string;

  @Prop()
  aboutinfo2: string;

  @Prop()
  aboutbutton: string;
}


export class Feature {
  @Prop()
  featurename: string;

  @Prop()
  color: string;

  @Prop()
  logo: string;

  @Prop()
  description: string;

  @Prop()
  lists: [string];

  @Prop()
  featureimg: string;

  @Prop()
  textcolor: string;
}


export class Reason {
  @Prop()
  reasonimg: Buffer;

  @Prop()
  reasonh4: string;

  @Prop()
  reasoncolor: string;

  @Prop()
  reasonp1: string;

  @Prop()
  reasonp2: string;
}


export class CustomerFeedback {
  @Prop()
  img: string;

  @Prop()
  by: string;

  @Prop()
  who: string;

  @Prop()
  feedback: string;
}

export class FAQ {
  @Prop()
  q: string;

  @Prop()
  a: string;
}


export class AnimationImage1 {
  @Prop()
  anime1img: string;

  @Prop()
  anime1class: string;
}
export class AnimationImage2 {
  @Prop()
  anime2img: string;

  @Prop()
  anime2class: string;
}
export class AnimationImage3 {
  @Prop()
  anime3img: string;

  @Prop()
  anime3class: string;
}
// Define the main Home schema
@Schema({ timestamps: true })
export class Home {
  @Prop()
  about: About;

  @Prop()
  ratingImg: string;

  @Prop({type:Object})
  features: { 
    featuresTitle: string; featureslist: [Feature] };

  @Prop({type:Object})
  youtube: {
    youtubeheading: string;
    youtubep1: string;
    youtubep2: string;
    youtubevideosrc: string;
  };

  @Prop({type:Object})
  reasons: {
    reasonheading: string;
    reasoninfo1: string;
    reasoninfo2: string;
    reason: [Reason];
  };

  @Prop({type:Object})
  animation: {
    animeh2: string;
    animep: string;
    animeimages1: [AnimationImage1];
    animeimages2: [AnimationImage2];
    animeimages3: [AnimationImage3];
  };

  @Prop({type:Object})
  customerfeedback: {
    feedbackh1: string;
    detail: [CustomerFeedback];
  };

  @Prop({type:Object})
  signup: {
    signuph1: string;
    signupspan: string;
    signupbtn: string;
    signupimg: string;
  };

  @Prop({type:Object})
  faq: {
    faqh1: string;
    questions: [FAQ];
  };

  @Prop({type:Object})
  start: {
    starth1: string;
    starth2: string;
    starth3: string;
    startbtn: string;
  };

  @Prop({type:Object})
  caro: {
    caroh: string;
    carospan: string;
    carop: string;
    carobtn: string;
    div1img: [string];
    div2img: [string];
    div3img: [string];
  };

  @Prop()
  deletedAt: Date;
}

export const HomeSchema = SchemaFactory.createForClass(Home);
