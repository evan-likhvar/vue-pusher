<?php
/**
 * Created by PhpStorm.
 * User: evan
 * Date: 01.03.18
 * Time: 10:55
 */

namespace App\Transformers;


use App\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{
    public function transform(User $user)
    {
        $scope = $this->getCurrentScope()->getIdentifier();

        return [
            'id' => $user->id,
            'name' => $user->name,
            'avatar' => $user->avatar($scope === 'users' || $scope == 'parent.users' ? 25 : 45),
        ];
    }
}