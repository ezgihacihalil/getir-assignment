import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCheckedTags, selectTags, setSelectedTags, setTagListSearchKey,
} from './tagListSlice';

export default function TagList() {
  const tagList = useSelector(selectTags);
  const selectedTags = useSelector(selectCheckedTags) || [];

  const dispatch = useDispatch();

  return (
    <div>
      Tag List
      <input type="text" onChange={(e) => dispatch(setTagListSearchKey(e.target.value))} />
      {
        Object.keys(tagList).map((tag) => (
          <div key={tag}>
            <label>
              <input
                type="checkbox"
                value={tag}
                checked={selectedTags.includes(tag)}
                onChange={(e) => dispatch(setSelectedTags(e.target.value))}
              />
              <span>{tag}</span>
              <span>{tagList[tag]}</span>
            </label>
          </div>
        ))
      }
    </div>
  );
}
