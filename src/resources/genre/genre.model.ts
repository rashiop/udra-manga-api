import { model, Schema } from 'mongoose';

import { initError } from './genre.constant';
import { IGenre, IGenreDoc, IGenreModel } from './genre.type';

const error = initError()
const schemaFields: Record<keyof IGenre, any> = {
  name: {
    type: String,
    required: [true, error.nameRequired],
    trim: true,
    maxLength: [100, error.nameMaxLength],
    minLength: [4, error.nameMinLength]
  },
  updated_by: { type: Schema.Types.ObjectId, ref: 'User' },
  created_by: { type: Schema.Types.ObjectId, ref: 'User' },
  is_active: {
    type: Boolean,
    default: true
  }
}

const genreSchema: Schema<IGenreDoc> = new Schema(schemaFields,
  { timestamps: true }
)

genreSchema.index({ name: 1 }, { unique: true })

const Genre = model<IGenreDoc, IGenreModel>('Genre', genreSchema)

export default Genre;