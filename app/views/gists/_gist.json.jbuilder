json.extract! gist, :title, :owner_id, :id
json.set! :favorited, current_user.favorites.find_by_gist_id(gist.id)







