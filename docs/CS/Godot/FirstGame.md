# First Game

Default Texture Filter: Nearest

更改其他场景的内容后要保存，主场景里才会更新

- 移动玩家：

```gdscript
extends Node2D

var direction: Vector2 = Vector2.ZERO
var speed: int = 5

func _physics_process(_delta: float) -> void: #(1)
    position += direction * speed #(2)
```

1. 使用 `_physics_process()` 方便后续添加物理效果
2. :warning: **直接更新位置会导致无法实现碰撞**，这在后面会修改

## 添加输入

捕捉用户输入：项目设置 -> Input Map，设置 Actions 和相应的键位绑定

```gdscript
if Input.is_action_pressed("right"): #(1)
    direction = Vector2.RIGHT
elif Input.is_action_pressed("left"):
    direction = Vector2.LEFT
```

1. "right" 是在 Input Map 里设置的 Action 名称

这样可以控制玩家移动，但不会停止。最好的方法是 :material-star:{.star} **使用 `Input.get_vector()`**

```gdscript
direction = Input.get_vector("left", "right", "up", "down")
```

这样在不按键时，`direction` 会自动变为 `(0, 0)`。

`Input.is_action_pressed()` 会在每一帧检测按键状态。若只关心是否按下，应使用 `Input.is_action_just_pressed()`。

## 添加相机

- 跟随物体
- 设置边界和速度

1.  将 Camera2D 节点添加到 Player 节点下
    - 粉色框是相机视图范围
    - [x] Position Smoothing：平滑跟随
2.  设置缩放（Zoom）调整视野大小
3.  根据地图边缘坐标设置边界（Limit）

## 物理与碰撞系统

-  `StaticBody2D`：静态物体
-  `CharacterBody2D`：受代码控制移动的物体（如玩家）
-  `RigidBody2D`：受物理引擎控制的物体（如箭、炮弹）
-  `Area2D`：checks if a body is in an area

:warning: 物理对象需要通过给定速度移动，而不是直接设置位置

### 静止物体

1.  在静止物体的场景中，设置根节点类型为 `StaticBody2D`
    :warning: 注意脚本的第一行（`extends ...`）也要做出相应修改，确保继承正确
2.  没有形状，添加 `CollisionShape2D` 作为子节点
3.  设置形状（Shape）为 `RectangleShape2D` 并调整大小，贴合物体
    > 按住 ++option++ 键拖拽矩形可以同时调整对边

### 玩家

1.  设置玩家的根节点为 `CharacterBody2D`，和上述过程一样地添加碰撞箱
2.  在 `_physics_process()` 函数中设置速度矢量（{++而不是直接更新位置++}）
    ```gdscript
    func _physics_process(_delta: float) -> void:
        direction = Input.get_vector("left", "right", "up", "down")
        velocity = direction * speed
        move_and_slide()
    ```

    使用 `move_and_slide()` 方法根据速度移动，并处理碰撞

### 设置地图边界

1.  在主场景中添加一个 `Node2D` 的子节点，命名为 "Borders"
2.  在 "Borders" 节点下用相同的方法设置四个 `StaticBody2D` 和 `CollisionShape2D` 作为边界

## 动画

有很多方式，这里介绍最简单的 `AnimatedSprite2D`.

1.  将原先的 `Sprite2D` 节点替换为 `AnimatedSprite2D`
2.  添加精灵帧（Sprite Frames）
    -  Inspector -> Sprite Frames -> New SpriteFrames
    -  在精灵帧编辑器：“Add frames from sprite sheet”加载 tileset 图集
3.  让动画与输入关联
    ```gdscript
    func animation():
        if direction == Vector2.ZERO:
            $AnimatedSprite2D.frame = 0
    ```

## 信号




`_ready()` 在向场景添加节点后调用