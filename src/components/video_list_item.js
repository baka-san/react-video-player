import React from 'react'

const VideoListItem = ({video}) => {
  // const video = props.video
  // remove props in function declaration and write {video}
  // then remove above const video declaration

  const imageURL = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem