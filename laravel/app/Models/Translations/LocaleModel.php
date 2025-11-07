<?php

namespace App\Models\Translations;

use App\Models\Language;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

abstract class LocaleModel extends Model
{

    protected array $localisable = [];

    protected bool $eagerLoadTranslations = true;

    protected bool $hideTranslations = false;

    protected bool $appendLocalizedAttributes = true;

    /**
     * Make a new translatable model
     *
     * @param array $attributes
     */
    public function __construct(array $attributes = [])
    {
        if ($this->eagerLoadTranslations) {
            $this->with[] = 'translations';
        }
        if ($this->hideTranslations) {
            $this->hidden[] = 'translations';
        }
        if ($this->appendLocalizedAttributes) {
            foreach ($this->localisable as $localisableAttribute) {
                $this->appends[] = $localisableAttribute;
            }
        }
        parent::__construct($attributes);
    }

    /**
     * This model's translations
     *
     */
    public function translations(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        $modelName = class_basename(get_class($this));

        return $this->hasMany("App\\Models\\Translations\\{$modelName}Translation");
    }


    public function __get($key)
    {
        if (in_array($key, $this->localisable)) {
            $translation = $this->translations
                ->where('language_id', self::getCurrentLocale())
                ->first();
            if ($translation == null) {
                $translation = $this->translations
                    ->where('language_id', config('app.fallback_locale_id'))
                    ->first();
            }
            return $translation ? $translation->{$key} : '-';
        }
        return parent::__get($key);
    }

    public function __call($method, $parameters)
    {
        foreach ($this->localisable as $localisableAttribute) {
            if ($method === 'get' . Str::studly($localisableAttribute) . 'Attribute') {
                return $this->{$localisableAttribute};
            }
        }
        return parent::__call($method, $parameters);
    }

    public function getCurrentLocale()
    {
        $language = Language::where('value', app()->getLocale())->first();

        if(!$language){
            return 1;
        }
        return $language->id;
    }

}
