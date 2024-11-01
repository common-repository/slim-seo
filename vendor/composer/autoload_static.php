<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0087e94420aae84a6ed51179bc79e075
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'SlimTwig\\' => 9,
            'SlimSEO\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'SlimTwig\\' => 
        array (
            0 => __DIR__ . '/..' . '/elightup/slim-twig/src',
        ),
        'SlimSEO\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0087e94420aae84a6ed51179bc79e075::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0087e94420aae84a6ed51179bc79e075::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit0087e94420aae84a6ed51179bc79e075::$classMap;

        }, null, ClassLoader::class);
    }
}