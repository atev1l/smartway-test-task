import './App.css';
import { useDispatch, useSelector} from "react-redux";
import {fetchCats} from "./asyncActions";
import {useEffect, useMemo, useState} from "react";
import {Card} from "./components/Card";

const App = () => {
    const dispatch = useDispatch()
    const catsList = useSelector(state => state?.cats)
    const afterLimitList = useSelector(state => state?.after)
    const [post, setFavouritesPost] = useState([])
    const favouritesPosts = useMemo(()=>{
        return post
    }, [post])

    useEffect(()=>{
        dispatch(fetchCats())
    }, [dispatch])

    return (
        <div className="App">
            <div className="column_cats">
                <div className="lg_fav_posts">
                    <div className="text" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '15px'
                    }}>
                        ИЗБРАННОЕ
                    </div>
                    {favouritesPosts[0] ?
                        <>
                            {favouritesPosts.map((post, index) => (
                                <div key={post.id + index} style={{
                                    padding: '0px 20px'
                                }}>
                                    <Card id = {post.id + index}
                                          title={post.title}
                                          thumbnail_h = {post?.thumbnail_height}
                                          thumbnail_w = {post?.thumbnail_width}
                                          thumbnail = {post.thumbnail}
                                          videoUrl={post.media ? post.media.reddit_video.fallback_url : ''}
                                          icon={'/FillCatPaw.png'}
                                          addHandleFavourites={()=>{
                                              setFavouritesPost(favouritesPosts.filter(favPost => favPost.title !== post.title))
                                          }}
                                    />
                                </div>
                            ))}
                        </>
                        :
                        <div className="text" style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            *Добавьте пост на кнопку-лапку*
                        </div>}
                </div>
                {catsList?.filter(cat => cat.data?.thumbnail_height && !cat.data?.over_18).map((key, index) => (
                    <div key={key.data.id + index}>
                        <Card id = {key.data.id + index}
                              title={key.data.title}
                              thumbnail_h = {key.data?.thumbnail_height}
                              thumbnail_w = {key.data?.thumbnail_width}
                              thumbnail = {key.data.thumbnail}
                              videoUrl={key.data.media ? key.data.media.reddit_video.fallback_url : ''}
                              icon={'/catPaw.png'}
                              addHandleFavourites={()=>{
                                  if (favouritesPosts.filter(favPost => favPost.title === key.data.title).length === 0) {
                                      setFavouritesPost([
                                          ...post,
                                          ...[{
                                              id: key.data.id,
                                              title: key.data.title,
                                              thumbnail_height: key.data?.thumbnail_height,
                                              thumbnail_width: key.data?.thumbnail_width,
                                              thumbnail: key.data.thumbnail,
                                              videoUrl: key.data.media ? key.data.media.reddit_video.fallback_url : ''
                                          }]])
                                  }
                              }}

                        />
                    </div>
                ))}

                <button className="button" onClick={(event)=>{
                    if (afterLimitList)
                        dispatch(fetchCats(afterLimitList))
                }} style={{
                    width: '100%',
                    marginTop: '5px',
                    marginBottom: '45px',
                }}>
                    Загрузить еще...
                </button>
            </div>
            <div>

                <div className="fav_posts">
                    <div className="text" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '15px'
                    }}>
                        ИЗБРАННОЕ
                    </div>
                    {favouritesPosts[0] ?
                        <>
                            {favouritesPosts.map((post, index) => (
                                <div key={post.id + index} style={{
                                    padding: '0px 20px'
                                }}>
                                    <Card id = {post.id + index}
                                          title={post.title}
                                          thumbnail_h = {post?.thumbnail_height}
                                          thumbnail_w = {post?.thumbnail_width}
                                          thumbnail = {post.thumbnail}
                                          videoUrl={post.media ? post.media.reddit_video.fallback_url : ''}
                                          icon={'/FillCatPaw.png'}
                                          addHandleFavourites={()=>{
                                              setFavouritesPost(favouritesPosts.filter(favPost => favPost.title !== post.title))
                                          }}
                                    />
                                </div>
                            ))}
                        </>
                        :
                        <div className="text" style={{display: 'flex', justifyContent: 'center'}}>
                            *Добавьте пост на кнопку-лапку*
                        </div>
                    }
                </div>
            </div>

        </div>
  );
}

export default App;
