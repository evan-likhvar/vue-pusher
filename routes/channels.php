<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});


Broadcast::channel('user.*', function ($user, $userId) {
    return (int) $user->id === (int) $userId;
});

Broadcast::channel('conversation.*', function ($user, $conversationId) {
    return $user->isInConversation(Conversation::find($conversationId));
});